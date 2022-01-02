import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });
import '../styles/index.css';
import { AppProps } from 'next/app';
import { JSX } from '@babel/types';
import { ThemeProvider } from '@mui/system';
import useCustomTheme from '@themes/main-theme';
import ClientOnly from '@components/client-only';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            cmsCallback={(cms) => {
              import('react-tinacms-editor').then((field) => {
                cms.plugins.add(field.MarkdownFieldPlugin);
              });
            }}
            documentCreatorCallback={{
              /**
               * After a new document is created, redirect to its location
               */
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${slug}/${breadcrumbs.join('/')}`;
                return (window.location.href = relativeUrl);
              },
              /**
               * Only allows documents to be created to the `Blog Posts` Collection
               */
              filterCollections: (options) => {
                return options.filter(
                  (option) => option.label === 'Blog Posts'
                );
              },
            }}
            {...pageProps}
          >
            {(livePageProps: JSX.Element) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <ThemeProvider theme={useCustomTheme()}>
          <ClientOnly>
            <Component {...pageProps} />
          </ClientOnly>
        </ThemeProvider>
      </TinaEditProvider>
    </>
  );
};

export default App;

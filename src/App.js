import { Layout } from './containers/Layout';
import { Chart } from './containers/Chart';
import { Header } from './components/Header';
import { LinkBar } from './components/LinkBar';

export const App = () => {
  return (
    <>
      <LinkBar />
      <Layout>
        <Header />
        <Chart />
      </Layout>
    </>
  )
};

import Builder from '..';
import { NextPageWithLayout } from '../../_app';

const Template: NextPageWithLayout = () => {
  return <h1>Template Page</h1>;
};

Template.getLayout = function getLayout(page) {
  return <Builder>{page}</Builder>;
};

export default Template;

import Builder from '..';
import TemplatesLayout from '../../../layouts/TemplatesLayout';
import { NextPageWithLayout } from '../../_app';

const Template: NextPageWithLayout = () => {
  return <TemplatesLayout />;
};

Template.getLayout = function getLayout(page) {
  return <Builder>{page}</Builder>;
};

export default Template;

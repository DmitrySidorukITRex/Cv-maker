import { useRouter } from 'next/router';
import Builder from '..';
import { personalDetailsVar, progressBarVar } from '../../../apollo/cache';
import { URL } from '../../../appConstants';
import { PersonalDetailsModel } from '../../../interfaces/shared.interface';
import PersonalDetailsLayout from '../../../layouts/PersonalDetailsLayout';
import { NextPageWithLayout } from '../../_app';

const PersonalDetails: NextPageWithLayout = () => {
  const progressBarItems = progressBarVar();
  const router = useRouter();
  const personalDetails = personalDetailsVar();

  const onChange = (data: PersonalDetailsModel) => {
    personalDetailsVar(data);
  };

  const onSubmit = () => {
    const currentProgressBarItems = progressBarItems.map((x) => {
      x.isActive = x.link === URL.BUILDER_EXPERIANCE;

      return x;
    });

    progressBarVar(currentProgressBarItems);
    router.push(URL.BUILDER_EXPERIANCE);
  };

  const onCancel = () => {
    router.push(URL.MAIN_PAGE);
  };

  return (
    <PersonalDetailsLayout
      personalDetails={personalDetails}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
};

PersonalDetails.getLayout = function getLayout(page) {
  return <Builder>{page}</Builder>;
};

export default PersonalDetails;

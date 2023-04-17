import React, { FC, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCreateView from "./ProfileCreate.view";
import { useForm } from "../../../../../../hooks/useForm";
import { rules } from "./ProfileCreate.validate";
import { Message } from "../../../../../../utils";
import { useLang } from "../../../../../../hooks/useLang";
import { ResearchProfileApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../../../../context/auth/auth.context";

const ProfileCreate: FC = () => {
  const { lang, getLangPath } = useLang();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, userId, scientistProfileId, loadAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    formRef,
    initialValues,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleSubmitFailed,
  } = useForm({ terms: true });

  useEffect(() => {
    if (scientistProfileId) {
      navigate(getLangPath(lang, "/research/profile"));
    }
  }, [scientistProfileId]);

  const handleSubmit = (values: any): void => {
    handleCreate(values);
  };

  const handleCreate = (values: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setIsSubmitting(true);
      const payload = {
        headline: values.headline,
        profile_user_id: userId,
        first_name: user?.name,
        last_name: user?.name,
        email: user?.email,
        about: values.about,
        country_id: values.country_id,
        country_location: values.country_location,
        industry_id: values.industry_id,
        organization_id: values.organization_id,
        status: 0,
      };
      ResearchProfileApi.create(payload)
        .then((res) => {
          console.log(res);
          setLoading(false);
          setIsSubmitting(false);
          Message.success("Your Profile created successfully and it is under review.");
          navigate(getLangPath(lang, "/research/profile"));
          //  resolve(res);
        })
        .catch((err) => {
          //Message.error(err.data);
          if (err.data.profile_user_id[0] === "Scientist profile already exists.") {
            Message.warning(err.data.profile_user_id[0]);
          }
          navigate(getLangPath(lang, "/research"));
          setLoading(false);
          setIsSubmitting(false);
          reject(err);
        });
    });
  };

  return (
    <ProfileCreateView
      formRef={formRef}
      loading={loading}
      initialValues={initialValues}
      rules={rules}
      isSubmitting={isSubmitting}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleSubmitFailed={handleSubmitFailed}
    />
  );
};

export default ProfileCreate;

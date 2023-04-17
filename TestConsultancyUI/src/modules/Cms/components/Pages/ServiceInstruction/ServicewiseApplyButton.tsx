import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FeatherIcon } from '@/assets/images/svg/feather-icon.svg';
import { useLang } from '@/hooks/useLang';
import { useLoading } from "@/hooks/useLoading";


interface IProps {
    serviceId,
    testServiceMapId,
    className,
    [key: string]: any,
}

const ServicewiseApplyButton: FC<IProps> = props => {
    const { t, lang, getLangUrl } = useLang();

    const { serviceId, testServiceMapId, className, serviceUrl, organizationShortCode } = props;

    return (
        <>
            {/* {hasPermission && serviceUrl && ( */}
                <Link className={`btn-apply ${className}`} to={getLangUrl(lang, `/application/${organizationShortCode}/${serviceUrl}?serviceId=${serviceId}&testServiceMapId=${testServiceMapId}`)}>
                    <span>{t('Apply Now')}</span>
                    <FeatherIcon />
                </Link>
            {/* )} */}
        </>
    )
}

export default ServicewiseApplyButton;

import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {useLang} from '../../../../../../hooks/useLang';

const Policy: FC<any> = (props) => {
    const {t} = useTranslation();
    const {lang} = useLang();

    const {buildingInfo, policyInfo} = props;

    return (
        <>
            <h3 id='policies' className="auditorium-color mt-5 h3">
                {t(" Policies of the ") + buildingInfo?.building_name}
            </h3>
            <div className="rounded-2 border border-1 p-3 auditorium-content">
                <div dangerouslySetInnerHTML={{ __html: policyInfo?.content }} />
            </div>
        </>
    )
}

export default React.memo(Policy)

import { Spin } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useAdvertisementInformationList } from '../../../../../../hooks/lists/useAdvertisementInformationList';
import { useLang } from '../../../../../../hooks/useLang';

const AdvertisementListListing: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { advertisementInformationList, loadingAdvertisementInformationList } = useAdvertisementInformationList();

   return (
      <>
         <div className="mt-4 block adver-box">
            <div className='px-2 block-title'>{t('Advertisement')}___ {loadingAdvertisementInformationList && <Spin size='small' />}</div>
            {!loadingAdvertisementInformationList && (
               <div className='p-2 pb-5 block-body'>
                  <ul>
                     {advertisementInformationList?.map((item, index) => {
                        return (
                           <li key={index}>{t(item.advertisement_subject)}</li>
                        )
                     })}
                  </ul>
               </div>
            )}
         </div>
      </>
   )
}

export default React.memo(AdvertisementListListing)
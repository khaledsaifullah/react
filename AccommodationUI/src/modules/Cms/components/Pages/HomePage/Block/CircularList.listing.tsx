import { Spin } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useCircularInformationList } from '../../../../../../hooks/lists/useCircularInformationList';
import { useLang } from '../../../../../../hooks/useLang';

const CircularListListing: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();

   const { circularInformationList, loadingCircularInformationList } = useCircularInformationList();

   return (
      <>
         <div className="mt-4 block circular-box">
            <div className='px-2 block-title'>{t('Circular')}___ {loadingCircularInformationList && <Spin size='small' />}</div>
            {!loadingCircularInformationList && (
               <div className='p-2 pb-5 block-body'>
                  <ul>
                     {circularInformationList?.map((item, index) => {
                        return (
                           <li key={index}>{t(item.circular_subject)}</li>
                        )
                     })}
                  </ul>
               </div>
            )}
         </div>
      </>
   )
}

export default React.memo(CircularListListing)
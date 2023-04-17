import { Spin } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useNoticeInformationList } from '../../../../../../hooks/lists/useNoticeInformationList';
import { useLang } from '../../../../../../hooks/useLang';

const NoticeListListing: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { noticeInformationList, loadingNoticeInformationList } = useNoticeInformationList();

   return (
      <>
         <div className="mt-4 block notice-box">
            <div className='px-2 block-title'>{t('Notice')}___ {loadingNoticeInformationList && <Spin size='small' />}</div>
            {!loadingNoticeInformationList && (
               <div className='p-2 pb-5 block-body'>
                  <ul>
                     {noticeInformationList?.map((item, index) => {
                        return (
                           <li key={index}>{t(item.notice_subject)}</li>
                        )
                     })}
                  </ul>
               </div>
            )}
         </div>
      </>
   )
}

export default React.memo(NoticeListListing)
import { Carousel } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ImageView from '../../../../../../components/Image/ImageView';
import { useAccommodationTypeList } from '../../../../../../hooks/lists/useAccommodationTypeList';
import { useLang } from '../../../../../../hooks/useLang';

const CategoriesListSlider: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang, getLangPath } = useLang();
   const { accommodationTypeList } = useAccommodationTypeList();

   const settings = {
      arrows: true,
      classNaem: '',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 980,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 720,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 620,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 320,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };


   return (
      <>
         <div className='mb-3'>
            <h2 className='h2 text-center fw-bold m-0 home-cat-title'>
               <span>Categories</span>
            </h2>
            <p className='text-center  home-cat-subtitle'>All accommodation types are shown below.
               Clicking on any type will take you <br /> to that particular category page</p>
         </div>
         <div className='home-cat-slider pb-5'>
            <Carousel
               autoplay
               {...settings}
            >
               {
                  accommodationTypeList?.map((item: any, index: any) => {
                     return (
                        <Link to={getLangPath(lang, '/filter?categoryIds=' + item.id)}>
                           <div className="px-2">
                              <div className='home-cat-box py-3 rounded-4 d-flex align-items-center flex-column'>
                                 <div className="home-cat-box-icon rounded-circle d-flex justify-content-center align-items-center">
                                    {item.picture ?
                                       <ImageView preview={false} height={35} width={30} imageId={item?.picture} />
                                       : null}
                                    <div className="home-cat-box-number rounded-circle d-flex justify-content-center align-items-center">
                                       120
                                    </div>
                                 </div>
                                 <h6 className='home-cat-box-title h6 text-center fw-bold m-0 pt-3'>
                                    {lang == "en" ? item.name_en : item.name_bn}
                                 </h6>
                              </div>
                           </div>
                        </Link>
                     )
                  })
               }
            </Carousel>
         </div>
      </>
   )
}

export default React.memo(CategoriesListSlider)

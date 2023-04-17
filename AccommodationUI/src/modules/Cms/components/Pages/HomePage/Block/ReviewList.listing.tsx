import { Col, Row } from 'antd'
import React, { FC } from 'react'
import { StarFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';

const ReviewListListing: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();

   return (
      <>
         <div className='mt-5 mb-4  text-center testimonial-heading'>
            <h3 className='h1 m-0'>What they say about the service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor
               <br /> sit amet, consectetur adipiscing elit ut aliquam</p>
         </div>
         <div className='testimonial-slider py-3 mb-5'>
            <Row gutter={[16, 16]}>
               <Col xs={24} md={8}>
                  <div className="testimonial-item px-3 py-3 rounded-4 d-flex align-items-center flex-column">
                     <div className="d-flex mb-3 mt-3">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                     </div>
                     <p className='text-center'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sit morbi habitasse sapien
                        massa bibendum dui. Ultrices orci, dolor mi ante lorem
                        fermentum. Aliquet et, congue diam parturient aliquet
                        sagittis. </p>
                     <h5 className='m-0 p-0'>Lister Sarker</h5>
                     <h6 className='m-0 p-0'>TechnoVista Limited</h6>
                  </div>
               </Col>
               <Col xs={24} md={8}>
                  <div className="testimonial-item px-3 py-3 rounded-4 d-flex align-items-center flex-column">
                     <div className="d-flex mb-3 mt-3">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                     </div>
                     <p className='text-center'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sit morbi habitasse sapien
                        massa bibendum dui. Ultrices orci, dolor mi ante lorem
                        fermentum. Aliquet et, congue diam parturient aliquet
                        sagittis. </p>
                     <h5 className='m-0 p-0'>Lister Sarker</h5>
                     <h6 className='m-0 p-0'>TechnoVista Limited</h6>
                  </div>
               </Col>
               <Col xs={24} md={8}>
                  <div className="testimonial-item px-3 py-3 rounded-4 d-flex align-items-center flex-column">
                     <div className="d-flex mb-3 mt-3">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                     </div>
                     <p className='text-center'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sit morbi habitasse sapien
                        massa bibendum dui. Ultrices orci, dolor mi ante lorem
                        fermentum. Aliquet et, congue diam parturient aliquet
                        sagittis. </p>
                     <h5 className='m-0 p-0'>Lister Sarker</h5>
                     <h6 className='m-0 p-0'>TechnoVista Limited</h6>
                  </div>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default React.memo(ReviewListListing)
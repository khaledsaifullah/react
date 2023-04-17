import { Col, DatePicker, Row, Select, Space, Spin } from 'antd';
import React, { FC } from 'react'
import { StarFilled } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';

const RatingAndReview: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();

   return (
      <>
         <h3 id="reviews" className="auditorium-color mt-5 h3">
            User Ratings & Reviews
         </h3>
         <Row gutter={[16, 16]}>
            <Col xs={24} md={4}>
               <div className="rounded-2 d-flex flex-column justify-content-between auditorium-ratingbox ">
                  <div>
                     <h4 className="h4 text-center pt-5 pb-2">
                        4,594
                     </h4>
                     <div className="text-center fw-bold">
                        Reviews
                     </div>
                  </div>
                  <div className="text-center pb-2">
                     <span className="ps-2">
                        <StarFilled />
                     </span>
                     <span className="ps-2">
                        <StarFilled />
                     </span>
                     <span className="ps-2">
                        <StarFilled />
                     </span>
                     <span className="ps-2">
                        <StarFilled />
                     </span>
                     <span className="ps-2">
                        <StarFilled />
                     </span>
                  </div>
               </div>
            </Col>

            <Col xs={24} md={4}>
               <h6 className="m-0 p-0 fw-normal">EXCELLENT</h6>
               <h6 className="m-0 p-0 fw-normal">VERY GOOD </h6>
               <h6 className="m-0 p-0 fw-normal">AVERAGE </h6>
               <h6 className="m-0 p-0 fw-normal">POOR </h6>
               <h6 className="m-0 p-0 fw-normal">BAD </h6>
            </Col>
            <Col xs={24} md={4}>
               <h6 className="m-0 p-0 fw-normal">271 REVIEWS </h6>
               <h6 className="m-0 p-0 fw-normal">143 REVIEWS </h6>
               <h6 className="m-0 p-0 fw-normal">16 REVIEWS </h6>
               <h6 className="m-0 p-0 fw-normal">7 REVIEWS </h6>
               <h6 className="m-0 p-0 fw-normal">3 REVIEWS </h6>
            </Col>
            <Col xs={24} md={12}></Col>
         </Row>
         <div className="mt-1">&nbsp;</div>

         {/* start:Review Comment */}
         <div className="rounded-2 border border-1 px-3 pt-2 pb-4  mt-2 auditorium-review-comment">
            <div className="d-flex mb-2">
               <h6 className="pe-2 fw-normal">
                  Anmi faisal14
                  <br />
                  Sep 07, 2022
               </h6>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
            </div>
            <div>
               <p>
                  Super staff, great restaurants, very central and
                  quiet compared to Renaissance or Westin Nice
                  front office service, best in Dhaka You can use
                  the shuttle airport service with safe driver
                  Recommended for all business visitor and
                  tourists
               </p>
            </div>
         </div>
         {/* end:Review Comment */}

         {/* start:Review Comment */}
         <div className="rounded-2 border border-1 px-3 pt-2 pb-4  mt-2 auditorium-review-comment">
            <div className="d-flex mb-2">
               <h6 className="pe-2 fw-normal">
                  Anmi faisal14
                  <br />
                  Sep 07, 2022
               </h6>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
            </div>
            <div>
               <p>
                  Super staff, great restaurants, very central and
                  quiet compared to Renaissance or Westin Nice
                  front office service, best in Dhaka You can use
                  the shuttle airport service with safe driver
                  Recommended for all business visitor and
                  tourists
               </p>
            </div>
         </div>
         {/* end:Review Comment */}

         {/* start:Review Comment */}
         <div className="rounded-2 border border-1 px-3 pt-2 pb-4  mt-2 auditorium-review-comment">
            <div className="d-flex mb-2">
               <h6 className="pe-2 fw-normal">
                  Anmi faisal14
                  <br />
                  Sep 07, 2022
               </h6>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
            </div>
            <div>
               <p>
                  Super staff, great restaurants, very central and
                  quiet compared to Renaissance or Westin Nice
                  front office service, best in Dhaka You can use
                  the shuttle airport service with safe driver
                  Recommended for all business visitor and
                  tourists
               </p>
            </div>
         </div>
         {/* end:Review Comment */}

         {/* start:Review Comment */}
         <div className="rounded-2 border border-1 px-3 pt-2 pb-4  mt-2 auditorium-review-comment">
            <div className="d-flex mb-2">
               <h6 className="pe-2 fw-normal">
                  Anmi faisal14
                  <br />
                  Sep 07, 2022
               </h6>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
            </div>
            <div>
               <p>
                  Super staff, great restaurants, very central and
                  quiet compared to Renaissance or Westin Nice
                  front office service, best in Dhaka You can use
                  the shuttle airport service with safe driver
                  Recommended for all business visitor and
                  tourists
               </p>
            </div>
         </div>
         {/* end:Review Comment */}

         {/* start:Review Comment */}
         <div className="rounded-2 border border-1 px-3 pt-2 pb-4  mt-2 auditorium-review-comment">
            <div className="d-flex mb-2">
               <h6 className="pe-2 fw-normal">
                  Anmi faisal14
                  <br />
                  Sep 07, 2022
               </h6>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
               <span className="ps-1">
                  <StarFilled />
               </span>
            </div>
            <div>
               <p>
                  Super staff, great restaurants, very central and
                  quiet compared to Renaissance or Westin Nice
                  front office service, best in Dhaka You can use
                  the shuttle airport service with safe driver
                  Recommended for all business visitor and
                  tourists
               </p>
            </div>
         </div>
         {/* end:Review Comment */}
      </>
   )
}

export default React.memo(RatingAndReview)
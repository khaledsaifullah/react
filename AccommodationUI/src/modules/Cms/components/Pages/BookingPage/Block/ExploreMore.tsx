import { Col, Row } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { EnvironmentOutlined, StarFilled, BankOutlined, CreditCardOutlined } from "@ant-design/icons";

const ExploreMore: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { } = props;

   return (
      <>
         <div className="p-3 mb-2 bg-white text-dark rounded-2 shadow-sm">
            <h5 className="h5 m-0 p-0 mb-2 fw-bold">
               Explore More
            </h5>

            {/* start:  */}
            <div className="p-1 mb-2 rounded-2  exploremore-package-box">
               <Row gutter={[16, 16]}>
                  <Col xs={24} md={7}>
                     <div className="exploremore-gallery">
                        <img
                           src="https://i.postimg.cc/s2WnTM9n/1.jpg"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={24} md={17}>
                     <div className="d-flex align-items-center justify-content-between">
                        <h5 className="exploremore-package-title  h5 m-0 p-0">
                           The Royal Horse guards
                        </h5>
                        <div className="d-flex flex-column  text-end exploremore-package-rating">
                           <div>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                           </div>
                           <div className="exploremore-package-rating-view">
                              (4,594 reviews)
                           </div>
                        </div>
                     </div>
                     <div className="m-0">
                        <div className="exploremore-package-text d-flex">
                           <EnvironmentOutlined />
                           Dhanmondhi, Dhaka
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <BankOutlined />
                           Bangladesh Council of Scientific
                           and Industrial Research (BCSIR)
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <CreditCardOutlined />
                           Guest House
                        </div>
                     </div>
                     <div className="see-availability-exploremore text-end">
                        <a href="#">See availability</a>
                     </div>
                  </Col>
               </Row>
            </div>
            {/* end:  */}

            {/* start:  */}
            <div className="p-1 mb-2 rounded-2  exploremore-package-box">
               <Row gutter={[16, 16]}>
                  <Col xs={24} md={7}>
                     <div className="exploremore-gallery">
                        <img
                           src="https://i.postimg.cc/3NfC8hF4/2.jpg"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={24} md={17}>
                     <div className="d-flex align-items-center justify-content-between">
                        <h5 className="exploremore-package-title  h5 m-0 p-0">
                           Dreamland Guest Home
                        </h5>
                        <div className="d-flex flex-column  text-end exploremore-package-rating">
                           <div>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                           </div>
                           <div className="exploremore-package-rating-view">
                              (4,594 reviews)
                           </div>
                        </div>
                     </div>
                     <div className="m-0">
                        <div className="exploremore-package-text d-flex">
                           <EnvironmentOutlined />
                           Dhanmondhi, Dhaka
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <BankOutlined />
                           Bangladesh Council of Scientific
                           and Industrial Research (BCSIR)
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <CreditCardOutlined />
                           Guest House
                        </div>
                     </div>
                     <div className="see-availability-exploremore text-end">
                        <a href="#">See availability</a>
                     </div>
                  </Col>
               </Row>
            </div>
            {/* end:  */}

            {/* start:  */}
            <div className="p-1 mb-2 rounded-2  exploremore-package-box">
               <Row gutter={[16, 16]}>
                  <Col xs={24} md={7}>
                     <div className="exploremore-gallery">
                        <img
                           src="https://i.postimg.cc/TYSqBRPB/3.jpg"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={24} md={17}>
                     <div className="d-flex align-items-center justify-content-between">
                        <h5 className="exploremore-package-title  h5 m-0 p-0">
                           The Cottage Motel
                        </h5>
                        <div className="d-flex flex-column  text-end exploremore-package-rating">
                           <div>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                           </div>
                           <div className="exploremore-package-rating-view">
                              (4,594 reviews)
                           </div>
                        </div>
                     </div>
                     <div className="m-0">
                        <div className="exploremore-package-text d-flex">
                           <EnvironmentOutlined />
                           Dhanmondhi, Dhaka
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <BankOutlined />
                           Bangladesh Council of Scientific
                           and Industrial Research (BCSIR)
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <CreditCardOutlined />
                           Guest House
                        </div>
                     </div>
                     <div className="see-availability-exploremore text-end">
                        <a href="#">See availability</a>
                     </div>
                  </Col>
               </Row>
            </div>
            {/* end:  */}

            {/* start:  */}
            <div className="p-1 mb-2 rounded-2  exploremore-package-box">
               <Row gutter={[16, 16]}>
                  <Col xs={24} md={7}>
                     <div className="exploremore-gallery">
                        <img
                           src="https://i.postimg.cc/GpnPhqGQ/4.jpg"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={24} md={17}>
                     <div className="d-flex align-items-center justify-content-between">
                        <h5 className="exploremore-package-title  h5 m-0 p-0">
                           Chestnut Tree Inn
                        </h5>
                        <div className="d-flex flex-column  text-end exploremore-package-rating">
                           <div>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                           </div>
                           <div className="exploremore-package-rating-view">
                              (4,594 reviews)
                           </div>
                        </div>
                     </div>
                     <div className="m-0">
                        <div className="exploremore-package-text d-flex">
                           <EnvironmentOutlined />
                           Dhanmondhi, Dhaka
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <BankOutlined />
                           Bangladesh Council of Scientific
                           and Industrial Research (BCSIR)
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <CreditCardOutlined />
                           Guest House
                        </div>
                     </div>
                     <div className="see-availability-exploremore text-end">
                        <a href="#">See availability</a>
                     </div>
                  </Col>
               </Row>
            </div>
            {/* end:  */}

            {/* start:  */}
            <div className="p-1 mb-2 rounded-2  exploremore-package-box">
               <Row gutter={[16, 16]}>
                  <Col xs={24} md={7}>
                     <div className="exploremore-gallery">
                        <img
                           src="https://i.postimg.cc/50n8gJG7/5.jpg"
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={24} md={17}>
                     <div className="d-flex align-items-center justify-content-between">
                        <h5 className="exploremore-package-title  h5 m-0 p-0">
                           Bella View Lounge
                        </h5>
                        <div className="d-flex flex-column  text-end exploremore-package-rating">
                           <div>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                           </div>
                           <div className="exploremore-package-rating-view">
                              (4,594 reviews)
                           </div>
                        </div>
                     </div>
                     <div className="m-0">
                        <div className="exploremore-package-text d-flex">
                           <EnvironmentOutlined />
                           Dhanmondhi, Dhaka
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <BankOutlined />
                           Bangladesh Council of Scientific
                           and Industrial Research (BCSIR)
                        </div>
                        <div className="exploremore-package-text d-flex">
                           <CreditCardOutlined />
                           Guest House
                        </div>
                     </div>
                     <div className="see-availability-exploremore text-end">
                        <a href="#">See availability</a>
                     </div>
                  </Col>
               </Row>
            </div>
            {/* end:  */}
         </div>
      </>
   )
}

export default React.memo(ExploreMore)
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import {
    bgshapefive, bgshapefour, bgshapeone, bgshapesix, bgshapethree, bgshapetwo, labMan, nstFellowshipGrant, paginationBulet, scienceBottol
} from "../../../../assets/images/pages/home";
import { baecIcon, baeraIcon, bcsirIcon, bnsdocIcon, bookSearchIcon, businessmanIcon, citizenIcon, eLearningIcon, elearningShapeIcon,
    eTicketingIcon, featherIcon, grabIconFive, grabIconFour, grabIconOne, grabIconSix, grabIconThree, grabIconTwo, granAppIcon,
    grantFellowshipIcon, instituteOrganizationIcon, licensingPermitIcon, mostIcon, nmstIcon, organizationCardTitleIcon,
    readmoreIcon, researcherIcon, researchShapeIcon, scientistIcon, searchBtnIcon, searchIcon, seekerCardTitleIcon,
    serviceCardTitleIcon,  specialResearchIcon,  studentIcon, virtualGalleriesIcon } from "../../../../assets/images/icon";
import {ETICKET_UI_URL, GRANT_UI_URL, RESEARCH_UI_URL, LIBRARY_UI_URL, LICENSE_UI_URL, VIRTUAL_GALLERY_UI_URL} from "../../../../constants/config.constant";
import { useLang } from '../../../../hooks/useLang';

interface Props {
    componentKey?: string;
    componentName?: string;
}
const ComponentWiseButton: React.FC<Props> = ({ componentKey, componentName}) => {
    const { t, lang, getUserLangUrl, getLangUrl } = useLang();
    const renderBgImage = (key) => {
        switch (key) {
            case "GRANT":   return <img src={bgshapeone} alt="icon" />;
            case "E_TICKET":   return <img src={bgshapethree} alt="icon" />;
            case "LICENSE":   return <img src={bgshapetwo} alt="icon" />;
            case "VIRTUAL_GALLERY":   return <img src={bgshapefour} alt="icon" />;
            case "RESEARCH":   return <img src={bgshapefive} alt="icon" />;
            default:      return <img src={bgshapeone} alt="icon" />;
            }
      }
      const renderBgIcon = (key) => {
        switch (key) {
            case "GRANT":   return <img src={grantFellowshipIcon} alt="icon" />;
            case "E_TICKET":   return <img src={eTicketingIcon} alt="icon" />;
            case "LICENSE":   return <img src={licensingPermitIcon} alt="icon" />;
            case "VIRTUAL_GALLERY":   return <img src={virtualGalleriesIcon} alt="icon" />;
            case "RESEARCH":   return <img src={researchShapeIcon} alt="icon" />;
            default:      return <img src={grantFellowshipIcon} alt="icon" />;
        }
      }
      const renderComponentURL = (key) => {
        switch (key) {
            case "GRANT":   return GRANT_UI_URL;
            case "E_TICKET":   return ETICKET_UI_URL;
            case "LICENSE":   return LICENSE_UI_URL;
            case "VIRTUAL_GALLERY":   return VIRTUAL_GALLERY_UI_URL;
            case "RESEARCH":   return RESEARCH_UI_URL;
            default:      return GRANT_UI_URL;
        }
      }
    return (
        <a href={renderComponentURL(componentKey)}>
            <div className="service-item">
                <div className="service-item-picture">
                    <span className="service-item-icon-shapebg">
                        {renderBgImage(componentKey)}
                    </span>
                    <span className="service-item-icon">
                        {renderBgIcon(componentKey)}
                    </span>
                </div>
                <label>{componentName}</label>
            </div>
        </a>
    );
}

export default ComponentWiseButton;
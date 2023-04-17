import React, { FC } from 'react'
import {TRAINING_UI_URL, ACCOMMODATION_UI_URL, PROCESS_LEASE_UI_URL, ETICKET_UI_URL, GRANT_UI_URL, RESEARCH_UI_URL, LIBRARY_UI_URL, LICENSE_UI_URL, VIRTUAL_GALLERY_UI_URL} from "../../../../constants/config.constant";


export const ComponentBaseUrlByKey = () => {
      const getComponentBaseURL = (componentKey) => {
        switch (componentKey) {
            case "GRANT":   return GRANT_UI_URL;
            case "E_TICKET":   return ETICKET_UI_URL;
            case "LICENSE":   return LICENSE_UI_URL;
            case "VIRTUAL_GALLERY":   return VIRTUAL_GALLERY_UI_URL;
            case "RESEARCH":   return RESEARCH_UI_URL;
            case "TRAINING":   return TRAINING_UI_URL;
            case "ACCOMMODATION":   return ACCOMMODATION_UI_URL;
            case "PROCESS_LEASE":   return PROCESS_LEASE_UI_URL;
            case "LIBRARY":   return LIBRARY_UI_URL;
            default:      return "/";
        }
      }
      return { getComponentBaseURL }
}
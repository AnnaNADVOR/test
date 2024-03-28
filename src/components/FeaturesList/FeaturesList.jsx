import Feature from "./Feature"
import sprite from "../../assets/icons/sprite.svg";
import capitalize from "services/capitalize";
import { DetailsList, DetailItem } from "../AdvertsList/Advert/Advert.styled";

const FeaturesList = ({ advert }) => {
    const details = Object.entries(advert.details);
    
    return (      
        <DetailsList>
            {advert.children > 0 &&
                (
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#children`}></use>
                        </svg>
                        {advert.children} children
                    </DetailItem> 
                )
            }
            
                <DetailItem>
                    <svg>
                        <use href={`${sprite}#adults`}></use>
                    </svg>
                    {advert.adults} adults
                </DetailItem> 
         
           
                <DetailItem>
                    <svg fill="none" stroke="black">
                        <use href={`${sprite}#transmission`}></use>
                    </svg>
                    {capitalize(advert.transmission)}
                </DetailItem>   
         
                <DetailItem>
                    <svg>
                        <use href={`${sprite}#engine`}></use>
                    </svg>
                   {capitalize(advert.engine)} 
                </DetailItem>
                  
            {details.map(detail => (
                !!detail[1] && (
                   
                        <DetailItem key={detail[0]}>
                            <Feature feature={detail} />
                        </DetailItem>
                    )
                ))
            }                                
        </DetailsList>      
    )
}

export default FeaturesList
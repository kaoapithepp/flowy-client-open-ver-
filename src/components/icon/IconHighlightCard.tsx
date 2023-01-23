import React from 'react';

// MUIs
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import LightRoundedIcon from '@mui/icons-material/LightRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import SettingsInputHdmiRoundedIcon from '@mui/icons-material/SettingsInputHdmiRounded';

import styled from 'styled-components';

interface CardData {
    detail: string;
    icon: string;
    id: string;
};

export const IconHighlightCard: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'WifiRoundedIcon':
                return <WifiRoundedIcon />;
            case 'LightRoundedIcon':
                return <LightRoundedIcon />;
            case 'AcUnitRoundedIcon':
                return <AcUnitRoundedIcon />;
            case 'TvRoundedIcon':
                return <TvRoundedIcon />;
            case 'ElectricalServicesIcon':
                return <ElectricalServicesIcon />;
            case 'SettingsInputHdmiRoundedIcon':
                return <SettingsInputHdmiRoundedIcon />;
            default:
                return;
        }
    }
    
    return (
        <Card>
            <Container>
                <Icon>
                    {renderSwitchCase(elem)}
                </Icon>
                    <p>
                        {elem.detail}
                    </p>
            </Container>
        </Card>  
    );
}

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Container = styled.div`
    display: grid;
    margin-bottom: 4px;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

const Icon = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
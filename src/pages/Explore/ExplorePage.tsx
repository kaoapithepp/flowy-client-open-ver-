import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import axios from 'axios';

// Global Components
import { ExploreCard } from '../../components/card/ExploreCard';
import LoadingScreen from '../../components/ui/LoadingScreen';

// Componentes
import Search from './components/Search/Search'
import Category from './components/Category/Category';

const ExplorePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [exploreCardDetail, setExploreCardDetail] = useState([]);

    useEffect(() => {
        // setIsLoading(true);
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/place/all`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setExploreCardDetail((res as any).data);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 3000);
                });
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[isLoading]);

    return(
        <>
            {
                false ? <LoadingScreen /> :
                <>
                    <Helmet>
                        <title>Explore | Flowy</title>
                    </Helmet>
                    <Section>
                        <Search />
                        <Category />
                        <ExploreCard exploreCardDetail={exploreCardDetail}/>
                    </Section>
                </>
            }
        </>
    );
}

const Section = styled.div`
    padding: 16px;
    min-width: 300px;
`;

export default ExplorePage;
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import getQuote from "./getQuoteApi";
const ReactQuery = () => {
    const {data, isError, isLoading} = useQuery("ReactQuery", () => getQuote());
    
    // if(isLoading){
    //     return <Loading/>
    // }

    return (
        <div>
            <h2> This is React query component</h2>
            <h3> {data?.content} </h3>
        </div>
    );
};

export default ReactQuery;
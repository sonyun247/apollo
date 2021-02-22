import React from "react";
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_PERSON = gql`
query getPerson($id: Int!){
  person(id:$id){id,name,age,gender}
}
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PERSON, { variables: { id: +id } });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return data?.person?.name;
}
export default Detail;
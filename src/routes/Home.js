import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";

const GET_PEOPLE = gql`
query{
  people{id,name}
}
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return data?.people?.map((person => (
        <Link to={`/${person.id}`}>
            <div key={person.id}>
                <p>
                    {person.name}
                </p>
            </div>
        </Link >
    )))
}


export default Home;
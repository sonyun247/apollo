import { useQuery, gql } from '@apollo/client';

const GET_PEOPLE = gql`
query{
  people{id,name}
}
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return data.people.map((person => (
        <div key={person.id}>
            <p>
                {person.name}
            </p>
        </div>
    )))
}


export default Home;
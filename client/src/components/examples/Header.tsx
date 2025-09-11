import Header from '../Header';

export default function HeaderExample() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return <Header onSearch={handleSearch} />;
}
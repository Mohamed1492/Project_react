
import ChoiceButton from '../Components/ChoiceButton';
import { Spinner } from 'react-bootstrap';
import { UseAxios } from '../Components/UseAxios';

const CategoryChoice = ({ handleCategory}) => {
  const { response, error, loading } = UseAxios({ url: '/api_category.php' });


  const arrayLinks =[{id:9,lien:"https://www.weeklyquiz.co.uk/wp-content/uploads/2018/01/images.png"},
  {id:10,lien:"https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg"},
  {id:11,lien:"https://img.jagranjosh.com/images/2022/December/7122022/most-searched-movie.jpg"},
  {id:12,lien:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRI6OKVb8KX8Vam-N5TO8h6cCtwg3gkpDrvw&usqp=CAU"},
  {id:13,lien:"https://badgerherald.com/wp-content/uploads/2018/01/GreatestShowman.jpg"},
  {id:14,lien:""},
  {id:15,lien:"https://m.media-amazon.com/images/M/MV5BMjI2NzQ0MTI1Ml5BMl5BanBnXkFtZTgwNzMyMDE2MDE@._V1_.jpg"},
  {id:16,lien:"https://s.yimg.com/ny/api/res/1.2/Vjc_eLqUtMEdcueWbNoSag--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/gobankingrates_644/4464a542bd2bf3c1300d1ae8de26441b"},
  {id:17,lien:"https://www.swwc.org/cms/lib/MN01000693/Centricity/Domain/104/Logos/SandN.jpg"},
  {id:18,lien:""},
  {id:19,lien:""},
  {id:20,lien:"https://wp.thecollector.com/wp-content/uploads/2020/06/giulio-romano-olympian-gods-wall-painting-1.jpg"},
  {id:21,lien:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMs1aBtTkuqVyLMBZ70awymMmdYCPrg09cg&usqp=CAU"},
  {id:22,lien:"https://study.com/cimages/videopreview/p3c2j8y73a.jpg"},
  {id:23,lien:"https://www.dundryprimary.co.uk/wp-content/uploads/2021/11/istockphoto-1092170968-612x612-1.jpg"},
  {id:24,lien:"https://blog.politics.ox.ac.uk/wp-content/uploads/2023/05/visual-politics-scaled.jpg"},
  {id:25,lien:"https://images.rtl.fr/~c/1200v800/rtl/www/1095331-l-art-de-multiples-bienfaits.jpg"},
  {id:26,lien:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F12%2Foscars-ellen-selfie_1.jpg&q=60"},
  {id:27,lien:"https://a-z-animals.com/media/2021/01/mammals-400x300.jpg"},
  {id:28,lien:"https://fr.web.img6.acsta.net/c_310_420/pictures/22/09/12/09/49/2452974.jpg"},
  {id:29,lien:"https://www.denofgeek.com/wp-content/uploads/2023/02/The-Most-Bizarre-Characters-in-Marvel-Comics.jpg?fit=1200%2C675"},
  {id:30,lien:"https://i.pinimg.com/originals/e2/0c/74/e20c7458b27b26b12b64fa2789a21b3d.jpg"},
  {id:31,lien:"https://laststopanime.com/wp-content/uploads/2022/09/Best-Manga-Panels-of-All-Time.jpg"},
  {id:32,lien:"https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2019/06/21114057/RT_ESSENTIAL_ANIMATION_700x250.jpg"}]

  console.log(response.trivia_categories)
  const handleClick = (selectedChoice) => {
    handleCategory(selectedChoice);
  };
  
  return (
    <>
      {loading ? (
        <>
          <Spinner animation='border' variant='primary' />
          <h1>Loading ...</h1>
        </>
      ) : (
        <>
          <div className='Choice'>
            {response &&
              response.trivia_categories &&
              response.trivia_categories.map((choice) => {
                const matchingLink = arrayLinks.find((link) => link.id === choice.id);
                if (matchingLink) {
                  return (
                    <ChoiceButton
                      key={choice.id}
                      id={choice.id}
                      name={choice.name}
                      lien={matchingLink.lien}
                      handleClick={handleClick}
                    />
                  );
                } else {
                  return null;
                }
              })}
          </div>
          
        </>
      )}
    </>
  );
};

export default CategoryChoice;
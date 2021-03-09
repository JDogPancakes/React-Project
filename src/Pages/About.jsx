import Header from '../Shared/Header';
import '../CSS/styling.css';
const About = () => {

    return (
        <>
          <Header title="About"/>
        <body className = 'body'>
            <p>For my project, I am using a json file containing information about dinosaurs.<br></br> The data will be displayed on a tables and use filter
                and search functionality.
            </p>
            <p1>The filter will use a dropdown containing possible diets. <br></br> It will use the selected diet and only show corresponding species. <br></br> </p1>
            <p2>The search will have a text bar that will search<br></br> the name field for the specified text.</p2>
        </body>
  
      </>
    );
}
export default About;
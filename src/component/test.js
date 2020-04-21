
import React,{useState, useEffect} from 'react';
import {baseUrl} from '../shared/BaseUrl.js';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Col} from 'reactstrap';
import {Link} from 'react-router-dom';

const Test = () => {
    const [appList,setAppList] = useState({});
    const [selectedApp,setSelected] = useState(false);
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(baseUrl+"app_list");
          res
            .json()
            .then(res => setAppList(res))
        }
    
        fetchData();
      });
    
    for(var i = 0;i<appList.length;i++){
      //console.log(appList[i].size);
    }
    
    return(<div>
      <Card>
                <CardBody>
                <CardTitle></CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardText>
                </CardBody>
      </Card>
    </div>);

}

export default Test;

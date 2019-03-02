import React from "react";
import { bindActionCreators } from "redux";
import Banner from "../../resource/img/Banner.png";

import {
  Image, Button, Box, Flex, Link
} from 'rebass'


class Home extends React.Component {

  render() {
     return (
     <Flex flexDirection="column">
         <Link href='/reviews'>REVIEWS </Link>
          <Image p={3}
                  src={Banner}
                  alt="First slide"
                 />
     </Flex>
     );
   }
}

export default Home;

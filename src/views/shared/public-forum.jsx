import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


// @material-ui/icons

// core components
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";


import ProductSection from "../../components/AboutUsSections/ProductSection";
import AppBar from "../../components/PublicForumSections/ForumAppBar";

import styles from "../../assets/jss/material-kit-react/views/landingPage";

const useStyles = makeStyles(styles);

export default function ForumPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <NavBar />
      <Parallax filter image={require("../../assets/images/Forum/bg5.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={6}>
              <h1 className={classes.title}>EXPLORATORY FORUM</h1>
              <h2>Share and Grow the World{"'"}s Knowledge...</h2>
              <h4>
                Exploratory connects the people who have knowledge to the people
                who need it, to bring together people with different
                perspectives so that they can understand each other better, and
                to empower everyone to share their knowledge.
              </h4>

              <br />
            </GridItem>
            <GridItem xs={6} align="center">
              <Button
                variant="contained"
                color="primary"
                href="/signup"
                size="large"
              >
                Create a new Account
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
      <AppBar />
      <main>
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
        </div>

      <Footer />
    </div>
  );
}

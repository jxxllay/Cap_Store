import React from "react";

import Custom from "./custom-ex";
import Numbers from "./numbers_page";
import BannerCatalog from "./banner_catalog";
import BannerMain from "./banner_main";
import Slider from "./slider";

const MainPage = () => {
    return (
        <div>
            <BannerMain />
            <Custom />
            <Slider/>
            <BannerCatalog /> 
            <Numbers />
        </div>
    )
}

export default MainPage;
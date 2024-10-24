import React, { useState, useEffect } from "react";
import { IoManSharp, IoWoman } from "react-icons/io5";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ products, setproductdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [search, setSearch] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenEcommerce = () => {
    setOpenEcommerce(!openEcommerce);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = products.filter((product) =>
      product.title.includes(value)
    );
    setproductdata(filtered);
  };

  const filterByCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setproductdata(filtered);
  };

  return (
    <div className="flex">
      <div className="hidden lg:flex flex-col w-[20rem] rounded-lg text-black h-[94vh] min-w-[15rem] p-4 shadow-[1px_1px_6px_6px_rgba(0,0,0,0.3)]  m-5 z-10 border-2 border-black ">
        <div className="p-2 mb-4">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <List className="text-white">
          <Accordion
            open={openEcommerce}
            icon={
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openEcommerce ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" onClick={handleOpenEcommerce}>
              <AccordionHeader className="p-3 border-b-0">
                <ListItemPrefix>
                  <RxHamburgerMenu className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="black" className="mr-auto">
                  Categories
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={() => filterByCategory("male")}>
                  <IoManSharp className="text-cyan-400" />

                  <button>Men</button>
                </ListItem>

                <ListItem onClick={() => filterByCategory("female")}>
                  <IoWoman className="text-pink-500" />
                  <button>Women</button>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion open={true}>
            <ListItem>
              <AccordionHeader className="p-3 border-b-0">
                <Typography color="black" className="mr-auto">
                  Price Range
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody>
              <List>
                <ListItem>
                  <input type="checkbox" value="100-400" />
                  <label>100 - 400</label>
                </ListItem>
                <ListItem>
                  <input type="checkbox" value="400-600" />
                  <label>400 - 600</label>
                </ListItem>
                <ListItem>
                  <input type="checkbox" value="600-1000" />
                  <label>600 - 1000</label>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
      </div>

      <div className="lg:hidden z-10">
        <button onClick={toggleDropdown} className="p-2 rounded-lg m-5">
          <RxHamburgerMenu size={40} />
        </button>
        {isOpen && (
          <div className="absolute w-[25%] mt-2 rounded-md shadow-lg bg-white">
            <List className="text-black">
              <div className="p-2 mb-4">
                <Input
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  label="Search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>

              <Accordion
                open={openEcommerce}
                icon={
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      openEcommerce ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" onClick={handleOpenEcommerce}>
                  <AccordionHeader className="p-3 border-b-0">
                    <ListItemPrefix>
                      <RxHamburgerMenu className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="black" className="mr-auto">
                      Categories
                    </Typography>
                  </AccordionHeader>
                </ListItem>

                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem onClick={() => filterByCategory("male")}>
                      <IoManSharp className="text-cyan-400" />
                      <span> Men</span>
                    </ListItem>
                    <ListItem onClick={() => filterByCategory("female")}>
                      <IoWoman className="text-pink-500" />
                      <span> Women</span>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>

              <Accordion open={true}>
                <ListItem>
                  <AccordionHeader className="p-3 border-b-0">
                    <Typography color="black" className="mr-auto">
                      Price Range
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody>
                  <List>
                    <ListItem>
                      <input type="checkbox" value="100-400" />
                      <label>100 - 400</label>
                    </ListItem>
                    <ListItem>
                      <input type="checkbox" value="400-600" />
                      <label>400 - 600</label>
                    </ListItem>
                    <ListItem>
                      <input type="checkbox" value="600-1000" />
                      <label>600 - 1000</label>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

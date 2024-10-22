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
  const [selectedPrices, setSelectedPrices] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenEcommerce = () => {
    setOpenEcommerce(!openEcommerce);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    filterProducts(value, selectedPrices);
  };

  const filterByCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setproductdata(filtered);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setSelectedPrices((prev) =>
      prev.includes(value)
        ? prev.filter((price) => price !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    filterProducts(search, selectedPrices);
  }, [selectedPrices]);

  const filterProducts = (searchValue, selectedPrices) => {
    let filtered = products;

    if (searchValue) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedPrices.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPrices.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    setproductdata(filtered);
  };

  return (
    <div className="flex">
      <div className="hidden lg:flex flex-col w-[20rem] rounded-lg text-black h-[94vh] min-w-[15rem] p-4 shadow-[1px_1px_6px_6px_rgba(0,0,0,0.3)] m-5 z-10 border-2 border-black dark:bg-gray-800 dark:text-gray-200">
        <div className="p-2 mb-4">
          <Input
            icon={
              <MagnifyingGlassIcon className="h-5 w-5 dark:text-gray-400" />
            }
            label="Search"
            value={search}
            onChange={handleSearch}
            className="dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <List className="dark:text-gray-200">
          <Accordion
            open={openEcommerce}
            icon={
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openEcommerce ? "rotate-180" : ""
                } dark:text-gray-400`}
              />
            }
          >
            <ListItem className="p-0" onClick={handleOpenEcommerce}>
              <AccordionHeader className="p-3 border-b-0">
                <ListItemPrefix>
                  <RxHamburgerMenu className="h-5 w-5 dark:text-gray-400" />
                </ListItemPrefix>
                <Typography
                  color="black"
                  className="mr-auto dark:text-gray-200"
                >
                  Categories
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={() => filterByCategory("male")}>
                  <IoManSharp className="text-cyan-400" />
                  <button className="dark:text-gray-200">Men</button>
                </ListItem>

                <ListItem onClick={() => filterByCategory("female")}>
                  <IoWoman className="text-pink-500" />
                  <button className="dark:text-gray-200">Women</button>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion open={true}>
            <ListItem>
              <AccordionHeader className="p-3 border-b-0">
                <Typography
                  color="black"
                  className="mr-auto dark:text-gray-200"
                >
                  Price Range
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody>
              <List>
                <ListItem>
                  <input
                    type="checkbox"
                    value="100-400"
                    onChange={handlePriceChange}
                  />
                  <label className="dark:text-gray-200">100 - 400</label>
                </ListItem>
                <ListItem>
                  <input
                    type="checkbox"
                    value="400-600"
                    onChange={handlePriceChange}
                  />
                  <label className="dark:text-gray-200">400 - 600</label>
                </ListItem>
                <ListItem>
                  <input
                    type="checkbox"
                    value="600-1000"
                    onChange={handlePriceChange}
                  />
                  <label className="dark:text-gray-200">600 - 1000</label>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
      </div>

      <div className="lg:hidden z-10">
        <button onClick={toggleDropdown} className="p-2 rounded-lg m-5">
          <RxHamburgerMenu size={40} className="dark:text-gray-200" />
        </button>
        {isOpen && (
          <div className="absolute w-[25%] mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800">
            <List className="text-black dark:text-gray-200">
              <div className="p-2 mb-4">
                <Input
                  icon={
                    <MagnifyingGlassIcon className="h-5 w-5 dark:text-gray-400" />
                  }
                  label="Search"
                  value={search}
                  onChange={handleSearch}
                  className="dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              <Accordion
                open={openEcommerce}
                icon={
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      openEcommerce ? "rotate-180" : ""
                    } dark:text-gray-400`}
                  />
                }
              >
                <ListItem className="p-0" onClick={handleOpenEcommerce}>
                  <AccordionHeader className="p-3 border-b-0">
                    <ListItemPrefix>
                      <RxHamburgerMenu className="h-5 w-5 dark:text-gray-400" />
                    </ListItemPrefix>
                    <Typography
                      color="black"
                      className="mr-auto dark:text-gray-200"
                    >
                      Categories
                    </Typography>
                  </AccordionHeader>
                </ListItem>

                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem onClick={() => filterByCategory("male")}>
                      <IoManSharp className="text-cyan-400" />
                      <span className="dark:text-gray-200">Men</span>
                    </ListItem>
                    <ListItem onClick={() => filterByCategory("female")}>
                      <IoWoman className="text-pink-500" />
                      <span className="dark:text-gray-200">Women</span>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>

              <Accordion open={true}>
                <ListItem>
                  <AccordionHeader className="p-3 border-b-0">
                    <Typography
                      color="black"
                      className="mr-auto dark:text-gray-200"
                    >
                      Price Range
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody>
                  <List>
                    <ListItem>
                      <input
                        type="checkbox"
                        value="100-400"
                        onChange={handlePriceChange}
                      />
                      <label className="dark:text-gray-200">100 - 400</label>
                    </ListItem>
                    <ListItem>
                      <input
                        type="checkbox"
                        value="400-600"
                        onChange={handlePriceChange}
                      />
                      <label className="dark:text-gray-200">400 - 600</label>
                    </ListItem>
                    <ListItem>
                      <input
                        type="checkbox"
                        value="600-1000"
                        onChange={handlePriceChange}
                      />
                      <label className="dark:text-gray-200">600 - 1000</label>
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

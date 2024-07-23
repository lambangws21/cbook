"use client"
import React from 'react';
import Card from "../../../components/card"
import data from "./data.json";

interface Item {
  type: string;
  items: string[];
}

interface Category {
  category: string;
  items: Item[];
}

const GeneralAnestesi: React.FC = () => {
  return (
    <Card>
    <div className="p-4">
      {data.map((category: Category) => (
        <div key={category.category} className="mb-4">
          <h2 className="text-xl font-bold mb-4">{category.category}</h2>
          {category.items.map((item: Item) => (
            <div key={item.type} className="mb-4 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
              <div className="flex flex-wrap">
                {item.items.map((subItem: string, index: number) => (
                  <div key={index} className="bg-gray-100 p-2 border rounded-xl w-auto shadow-md md:text-xs md:w-1/4 sm:w-1/2 hover:bg-green-300 m-2 text-sm uppercase">
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </Card>
  );
}

export default GeneralAnestesi;

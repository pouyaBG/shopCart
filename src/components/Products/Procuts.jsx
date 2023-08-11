import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from '../shared/card/Card';
import { useData } from '../../context/DataContext';
import styles from "./Store.module.css"


function Products() {
  const data = useData()
  return (
    <div className={styles.container} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between  " }}>
      {data &&
        data.map((item) => (
          <Card image={item.image} title={item.title} price={item.price} id={item.id} key={item.id} />
        ))}
    </div>
  );
}

export default Products;

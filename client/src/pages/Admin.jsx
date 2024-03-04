import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TypeModal from '../components/typeModal/TypeModal';
import ProductModal from '../components/productModal/ProductModal';

const Admin = () => {
    const [showTypeModal, setShowTypeModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowTypeModal(true)} variant="primary">Добавить тип</Button>
            <Button onClick={() => setShowProductModal(true)} variant="primary">Добавить продукт</Button>
            <TypeModal showTypeModal={showTypeModal} setShowTypeModal={setShowTypeModal} />
            <ProductModal showProductModal={showProductModal} setShowProductModal={setShowProductModal} />
        </div>
    )
}
export default Admin;
import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductButtonComponent = withRouter(({ history, productType }) => (
    <Button
        variant="primary"
        onClick={() => { history.push(`/products/${productType}`) }}
    >
        Choose a {productType}
    </Button>
));

export default ProductButtonComponent
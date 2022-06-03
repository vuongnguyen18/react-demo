import React from "react";
import Rating from './Helpers';

export default function RatingStar({ rate }) {
    return (
        <Rating value={rate} />
    );
}
import React from "react";
import styled from 'styled-components'

export default function ScanIcon({ color, size, hoverColor }) {
    return (
        <svg width={size || '32'} height={size || 32} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V44C0 46.2091 1.79086 48 4 48C6.20914 48 8 46.2091 8 44V8H44C46.2091 8 48 6.20914 48 4C48 1.79086 46.2091 0 44 0H8Z" fill={color || '#000'} />
            <path fillRule="evenodd" clipRule="evenodd" d="M128 8C128 3.58172 124.418 0 120 0H84C81.7909 0 80 1.79086 80 4C80 6.20914 81.7909 8 84 8H120V44C120 46.2091 121.791 48 124 48C126.209 48 128 46.2091 128 44V8Z" fill={color || '#000'} />
            <path fillRule="evenodd" clipRule="evenodd" d="M120 128C124.418 128 128 124.418 128 120V84C128 81.7909 126.209 80 124 80C121.791 80 120 81.7909 120 84V120H84C81.7909 120 80 121.791 80 124C80 126.209 81.7909 128 84 128H120Z" fill={color || '#000'} />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 84V120C0 124.418 3.58172 128 8 128H44C46.2091 128 48 126.209 48 124C48 121.791 46.2091 120 44 120H8V84C8 81.7909 6.20914 80 4 80C1.79086 80 0 81.7909 0 84Z" fill={color || '#000'} />
            <path d="M32 64C32 61.7909 33.7909 60 36 60H92C94.2091 60 96 61.7909 96 64V64C96 66.2091 94.2091 68 92 68H36C33.7909 68 32 66.2091 32 64V64Z" fill={color || '#000'} />
        </svg>
    );
}
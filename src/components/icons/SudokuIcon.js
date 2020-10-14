import React from 'react'

export default function SudokuIcon({ color, size }) {
    return (
        <svg width={size || '32'} height={size || '32'} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V40V48V80V88V124C0 126.209 1.79086 128 4 128H40V130H48V128H80H88H124C126.209 128 128 126.209 128 124V88V80V48V40V4C128 1.79086 126.209 0 124 0H88H80H4ZM48 120H80V88H48V120ZM48 80H80V48H48V80ZM40 48V80H8V48H40ZM48 40H80V8H48V40ZM40 8V40H8V8H40ZM40 88V120H8V88H40ZM120 120H88V88H120V120ZM120 80H88V48H120V80ZM120 40H88V8H120V40Z" fill={color || '#000'} />
        </svg>
    )
}

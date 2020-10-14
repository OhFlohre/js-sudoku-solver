import React from 'react'

import { Bar, A } from './NavbarStyles'

import ScanIcon from '../icons/ScanIcon'
import SudokuIcon from '../icons/SudokuIcon'

export default function Navbar() {
    return (
        <Bar>
            <A to="/"><SudokuIcon color="#9DB3BE" /></A>
            <A to="/"><ScanIcon color="#9DB3BE" /></A>
            <A to="/"><SudokuIcon color="#9DB3BE" /></A>
        </Bar>
    )
}

import React from 'react';
import '../css/Preview.css';

function Preview() {
    return (
        <div className="preview">
            <div className="destination-p">
                <img src="/images/greece.jpg" alt="Santorini, Greece" />
                <h2>Santorini, Greece</h2>
                <p>Perched dramatically atop a volcanic caldera, Santorini is Greece's most iconic island destination where white-washed villages cascade down 1,000-foot cliffs toward an azure Aegean Sea. This Cycladic jewel offers postcard-perfect sunsets, ancient Minoan ruins, and world-renowned wineries carved into lava stone. Whether you're seeking romantic getaways in Oia or archaeological adventures at Akrotiri, Santorini delivers that perfect blend of relaxation and discovery that defines Mediterranean magic.</p>
                <h3>Highlights:</h3>
                <ul>
                    <li><b>Akrotiri Archaeological Site:</b> Explore the "Pompeii of the Aegean" - a Bronze Age city perfectly preserved under volcanic ash since 1620 BC, revealing Minoan frescoes and advanced plumbing systems</li>
                    <li><b>Caldera Cliff Hiking:</b> Follow the 6-mile Fira-to-Oia trail connecting Santorini's two main towns, passing cliffside chapels, hidden coves, and breathtaking sea views at every turn</li>
                    <li><b>Black Sand Beaches:</b> Relax on dramatic volcanic beaches like Perissa and Kamari where obsidian sand meets crystal-clear waters perfect for snorkeling and seaside tavernas</li>
                </ul>
                <div className="cost">Total Cost: $2,051</div>
                <div className="actions-p">
                    <button>Add to Bucket List</button>
                    <button>Book Trip</button>
                </div>
            </div>
        </div>
    );
}

export default Preview;
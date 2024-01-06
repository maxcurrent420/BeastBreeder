# BeastBreeder Roadmap

This roadmap outlines the future plans for the BeastBreeder game. It provides an overview of the current state of the project, as well as the features we plan to implement in the future.

## Current State

BeastBreeder is a monster breeding game centered around breeding insectoids. The game currently features a breeding system for creating new monsters with unique traits, a basic battling system for engaging in battles with other monsters, a store UI and logic for buying items and monsters, an inventory screen for managing collected items, procedural generation for generating quests, and saving and loading game data.

Progress has been made on the base HTML page, minimal styling, instantiating core game objects, starting logic, monster data and methods, and the home page and monster list.

## Other considerations
Hosting our game on IPFS (InterPlanetary File System) can offer several benefits, such as decentralization, resistance to censorship, and potentially improved uptime. However, there are considerations and trade-offs that we should be aware of:

### Performance
- **Loading Times**: IPFS can have variable loading times because content is served by peers. Ensuring enough peers have the content can improve load times.
- **Content Availability**: Content on IPFS is available as long as it is pinned by at least one peer. We will use a pinning service to ensure availability.

### Maintenance
- **Content Updating**: Updating content on IPFS is not as straightforward as on traditional servers. Each update generates a new hash, and you'll need to update links that point to your content.
- **Domain Linking**: Unstoppable domains will be used to host our domain.

### User Experience
- **Browser Support**: Not all browsers natively support IPFS. Users may need to install browser extensions or use specific browsers.
- **Wallet Integration**: Since your game uses Polygon wallets for login and transactions, ensure that wallet interactions work seamlessly with IPFS-hosted content.

### Security
- **Smart Contract Interaction**: If your game interacts with smart contracts, test thoroughly to ensure that IPFS hosting does not introduce any security vulnerabilities.
- **Data Integrity**: IPFS provides content addressing, which ensures that the content is tamper-proof. However, you should still implement best practices for securing user data.

### Scalability
- **Handling Load**: We will address this if we get the sie running and users like it.

### Development Workflow
- **Continuous Integration/Deployment**: Your current CI/CD pipelines may need to be adapted for IPFS deployment, which can affect your development workflow.

### Legal and Ethical Considerations
- **Content Removal**: On traditional servers, you can easily remove content. On IPFS, once content is distributed and pinned by others, it cannot be easily removed. We will not entertain content removal. Users will be liable for the content they create or distribute and we will not accept censorship of our own content. 

### Community Support and Documentation
- **Support Channels**: Ensure you have access to good support channels for IPFS, as you may encounter unique challenges that require community assistance.

### Backup and Redundancy
- **Data Backup**: Regularly back up your data. While IPFS is distributed, having your own backup is crucial.

### Monitoring and Analytics
- **Traffic Analytics**: Not needed at this time.


## Planned Features

### Hosting on IPFS

We plan to host the game on IPFS to ensure it is decentralized and resistant to censorship. This feature is expected to be implemented by Q2 2023.

### Using MATIC to Buy In-Game Items
- Advanced Breeding Mechanics
- Skill Trees and Monster Specializations

To provide a seamless experience for our users, we plan to integrate MATIC as a payment method for buying in-game items. This feature is expected to be implemented by Q3 2023.

### Minting AI-Generated Monster Images as NFTs

We plan to allow gamers to mint AI-generated images of monsters as NFTs. This will provide a unique and engaging experience for our users, as each monster will be unique. This feature is expected to be implemented by Q4 2023.

## Conclusion

We are excited about the future of BeastBreeder and look forward to seeing it grow. We welcome contributions and feedback from the community. Together, we can make BeastBreeder the best it can be.

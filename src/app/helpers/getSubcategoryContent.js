export async function getSubcategoryContent(slug) {
    const subcategories = {
      'full-smile-recovery': {
        title: 'Hair Loss Treatment',
        description: 'Discover our hair loss treatment solutions.',
      },
      'skin-care': {
        title: 'Skin Care',
        description: 'Explore our premium skin care treatments.',
      },
      'anti-aging': {
        title: 'Anti-Aging Solutions',
        description: 'Reverse time with our anti-aging offerings.',
      },
    };
  
    return subcategories[slug] || {
      title: 'Unknown Treatment',
      description: 'This treatment does not exist.',
    };
  }
  
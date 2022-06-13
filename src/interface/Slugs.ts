const pageSlugs = ['landing', 'project', 'fourofour'] as const;
type Slugs = typeof pageSlugs[number];

export default Slugs;

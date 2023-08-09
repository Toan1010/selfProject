import { HeaderOnly } from '~/components/Layout';

import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';

export const publicRouter = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

export const privateRouter = [];

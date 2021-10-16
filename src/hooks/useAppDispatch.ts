import type { AppDispatch } from 'src/state/store';

import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { jobData } from '../classes/jobData';
import { initsupabase } from '../utils/initsupabase';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient = createClient(
    initsupabase.SUPABASE_URL,
    initsupabase.SUPABASE_KEY
  );
  data!: jobData[];
  constructor() {}

  readonly fetchDummy = async () => {
    console.log('called fetch dummy');

    let { data, error } = await this.supabase.from('jobData').select('*');
    console.log(data);
    this.data = data!;
    return data;
  };
  fetchByID = async (param: any) => {
    let { data, error } = await this.supabase
      .from('jobData')
      .select('*')
      .eq('id', param);
    // console.log(data);
    this.data = data!;
    return data;
  };

  getdata() {
    return this.data;
  }
}

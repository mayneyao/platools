import { supabase } from "~/server/supabase"


export interface IValidateLicenseResponse {
  valid: boolean
  error: any
  license_key: LicenseKey
  instance: Instance
  meta: Meta
}

export interface IActiveLicenseResponse {
  activated: boolean
  error: any
  license_key: LicenseKey
  instance: Instance
  meta: Meta
}


export interface LicenseKey {
  id: number
  status: string
  key: string
  activation_limit: number
  activation_usage: number
  created_at: string
  expires_at: string
}

export interface Instance {
  id: string
  name: string
  created_at: string
}

export interface Meta {
  store_id: number
  order_id: number
  order_item_id: number
  product_id: number
  product_name: string
  variant_id: number
  variant_name: string
  customer_id: number
  customer_name: string
  customer_email: string
}


export class LmSqueezy {
  activeLicense = async (licenseKey: string, name: string) => {
    const resp = await fetch('https://api.lemonsqueezy.com/v1/licenses/activate', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `license_key=${licenseKey}&instance_name=${name}`
    })
    const data = await resp.json() as IActiveLicenseResponse;
    return data;
  }

  validateLicense = async (licenseKey: string) => {
    const resp = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `license_key=${licenseKey}`
    })
    const data = await resp.json() as IValidateLicenseResponse;
    return data;
  }
}



export const bindLicenseForUser = async (licenseKey: string, userId: string) => {
  const lm = new LmSqueezy();
  try {
    const license = await lm.validateLicense(licenseKey);
    if (!license.valid || license.license_key.status !== 'inactive') {
      return false;
    }
    const activateResp = await lm.activeLicense(licenseKey, 'test');
    if (activateResp.activated) {
      const productId = activateResp.meta.product_id;
      const { error } = await supabase
        .from('user_product_ownerships')
        .insert([
          {
            license_key: licenseKey,
            user_id: userId,
            product_id: productId,
            paid: true,
          }])
      if (error) {
        throw error;
      }
      return true;
    }
  } catch (error) {
    throw error;
  }
}
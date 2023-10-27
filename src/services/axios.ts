import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = Axios.create({
      baseURL,
      // Other default configuration options can be added here
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        config
      );

      return response.data;
    } catch (error) {
      throw error; // Propagate the error for handling in components
    }
  }

  // Add other methods for different HTTP methods (post, put, delete, etc.)
  // You can also add custom methods, interceptors, and any other configurations.

  // Example: Interceptor for adding authentication token to requests
  // addAuthInterceptor(token: string) {
  //   this.axiosInstance.interceptors.request.use((config) => {
  //     config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   });
  // }
}

export default AxiosService;

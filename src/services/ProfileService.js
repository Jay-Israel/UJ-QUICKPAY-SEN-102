const PROFILE_STORAGE_KEY = "quickpay_unijos_student_profile";

const memoryStorage = (() => {
  const store = new Map();

  return {
    getItem: (key) => store.get(key) || null,
    setItem: (key, value) => store.set(key, value),
  };
})();

function getStorage() {
  if (typeof window === "undefined") {
    return memoryStorage;
  }

  return window.localStorage;
}

class ProfileService {
  constructor(defaultProfile, storage = getStorage()) {
    this.defaultProfile = defaultProfile;
    this.storage = storage;
  }

  getProfile() {
    const storedProfile = this.storage.getItem(PROFILE_STORAGE_KEY);

    if (!storedProfile) {
      return this.defaultProfile;
    }

    return {
      ...this.defaultProfile,
      ...JSON.parse(storedProfile),
    };
  }

  saveProfile(profile) {
    const nextProfile = {
      ...this.defaultProfile,
      ...profile,
    };

    this.storage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
    return nextProfile;
  }
}

export default ProfileService;

#include<iostream>
#include<algorithm>
#include<cmath>
#include<vector>

using namespace std;

bool sorting(pair<int, int> p1, pair<int, int> p2) {
	if (p1.second == p2.second) {
		return p1.first < p2.first;
	}
	return p1.second > p2.second;
}

int main(void) {
	int n;
	cin >> n;
	int* arr = new int[n];
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}
	int sum=0;
	for (int i = 0; i < n; i++) {
		sum += arr[i];
	}
	int mean = round((float)sum / n);
	cout << mean << endl;

	sort(arr, arr+n);
	cout << arr[n / 2] << endl;
	
	//index 0 = -4000
	//index 4000 = 0
	//index 8000 = 4000

	int arr1[8001] = {0};
	for (int i = 0; i < n; i++) {
		arr1[arr[i] + 4000] += 1;
	}
	int max = 0;
	for (int i : arr1) {
		if (max < i) {
			max = i;
		}
	}
	int answer;
	bool isFirst = true;

	for (int i = 0; i <8001; i++) {
		if (arr1[i] == max&&isFirst==true) {
			answer = i - 4000;
			isFirst = false;
		}
		else if (arr1[i] == max && isFirst == false) {
			answer = i - 4000;
			break;
		}
	}
	cout << answer << endl;
	cout << arr[n - 1] - arr[0];
	return 0;
}